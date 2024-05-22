import type { Metadata } from "next";
import {
  GameServiceDefinition,
  PlatformServiceDefinition,
} from "@/generated/retrom";
import { Client, createChannel, createClient } from "nice-grpc";
import { Inter } from "next/font/google";
import "./globals.scss";
import { cn } from "@/lib/utils";
import { SideBar } from "./side-bar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Toaster } from "@/components/ui/toaster";
import { Menubar } from "@/components/menubar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getGames } from "@/actions/grpc/games";
import { getPlatforms } from "@/actions/grpc/platforms";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { games, metadata: gamesMetadata } = await getGames({
    withMetadata: true,
  });
  const { platforms, metadata: platformsMetadata } = await getPlatforms({
    withMetadata: true,
  });

  return (
    <html lang="en">
      <body
        className={cn("bg-background font-sans antialiased", inter.variable)}
      >
        <div className="h-screen max-h-screen relative flex flex-col">
          <Menubar />
          <ResizablePanelGroup direction="horizontal" className="h-full">
            <ResizablePanel defaultSize={25} maxSize={40} className="bg-muted">
              <SideBar
                platforms={platforms}
                games={games}
                gamesMetadata={gamesMetadata}
                platformsMetadata={platformsMetadata}
              />
            </ResizablePanel>

            <ResizableHandle />

            <ResizablePanel defaultSize={75}>
              <ScrollArea className="h-full max-h-full">
                <main className="pb-16">{children}</main>
              </ScrollArea>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
