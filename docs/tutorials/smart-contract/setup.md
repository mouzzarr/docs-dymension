---
title: "Set Up Your Work Environment"
order: 2
description: All you need for the hands-on sections
slug: setup
---

# Set Up Your Work Environment

On this page, you can find helpful links to set up your work environment for all hands-on sections.

:::info In this section, you can find all you need to install:

- [Docker](https://www.docker.com/)
- [Go](https://go.dev/)
- [Ignite CLI](https://ignite.com/)
- [Node.js](https://nodejs.org/en/)
- [Rust](https://www.rust-lang.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

:::

## Install Docker

Docker is very helpful to do the exercises. So you may need to install Docker. To install, head to the [Install Docker Engine page](https://docs.docker.com/engine/install/).

## Install Go

You need Go to develop with the dYmension `RDK`. If you still need to install Go on your system, head to the [Go download and install page](https://go.dev/doc/install).

## Install Rust

To work with Rust, you may need to install it first. You can find a well-documented install step-by-step in the [Install page from Rust](https://www.rust-lang.org/tools/install).

## Install Rustup

On Mac/Linux systems, here are the commands for installing it:

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

rustup default stable && rustup target list --installed && rustup target add wasm32-unknown-unknown
```

## Install Visual Studio Code

This integrated development environment assists both with developing with the Cosmos SDK and CosmJS. To install it, please go to the [Visual Studio Code install page](https://code.visualstudio.com/Download). Then select depending on your operating system (OS).