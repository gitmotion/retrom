use std::sync::Arc;

use emulators::EmulatorServiceHandlers;
use games::GameServiceHandlers;
use jobs::{job_manager::JobManager, JobServiceHandlers};
use library::LibraryServiceHandlers;
use metadata::MetadataServiceHandlers;
use platforms::PlatformServiceHandlers;
use retrom_codegen::retrom::{
    client_service_server::ClientServiceServer, emulator_service_server::EmulatorServiceServer,
    game_service_server::GameServiceServer, job_service_server::JobServiceServer,
    library_service_server::LibraryServiceServer, metadata_service_server::MetadataServiceServer,
    platform_service_server::PlatformServiceServer, FILE_DESCRIPTOR_SET,
};
use retrom_db::Pool;
use tonic::transport::{server::Routes, Server};

use crate::providers::igdb::provider::IGDBProvider;

pub mod clients;
pub mod emulators;
pub mod games;
pub mod jobs;
pub mod library;
pub mod metadata;
pub mod platforms;

pub fn grpc_service(db_pool: Arc<Pool>) -> Routes {
    let igdb_client = Arc::new(IGDBProvider::new());
    let job_manager = Arc::new(JobManager::new());

    let reflection_service = tonic_reflection::server::Builder::configure()
        .register_encoded_file_descriptor_set(FILE_DESCRIPTOR_SET)
        .build()
        .unwrap();

    let library_service = LibraryServiceServer::new(LibraryServiceHandlers::new(
        db_pool.clone(),
        igdb_client.clone(),
        job_manager.clone(),
    ));

    let metadata_service = MetadataServiceServer::new(MetadataServiceHandlers::new(
        db_pool.clone(),
        igdb_client.clone(),
    ));

    let game_service = GameServiceServer::new(GameServiceHandlers::new(db_pool.clone()));
    let platform_service =
        PlatformServiceServer::new(PlatformServiceHandlers::new(db_pool.clone()));

    let client_service =
        ClientServiceServer::new(clients::ClientServiceHandlers::new(db_pool.clone()));

    let emulator_service =
        EmulatorServiceServer::new(EmulatorServiceHandlers::new(db_pool.clone()));

    let job_service = JobServiceServer::new(JobServiceHandlers::new(job_manager.clone()));

    Server::builder()
        .trace_fn(|_| tracing::info_span!("service"))
        .accept_http1(true)
        .add_service(reflection_service)
        .add_service(tonic_web::enable(library_service))
        .add_service(tonic_web::enable(game_service))
        .add_service(tonic_web::enable(platform_service))
        .add_service(tonic_web::enable(metadata_service))
        .add_service(tonic_web::enable(client_service))
        .add_service(tonic_web::enable(emulator_service))
        .add_service(tonic_web::enable(job_service))
        .into_service()
}
