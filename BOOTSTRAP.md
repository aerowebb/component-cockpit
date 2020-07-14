# Front-end development environment bootstrap

This installation guide is intended to _AeroWebb 7+_ developers working on _Windows 10_.

Please read this entire guide before beginning.

## Git

[Install](https://git-scm.com/downloads).

### GitLab

1. [Create](https://gitlab.com/users/sign_up) a professional account on GitLab.
2. Ask 2MoRO to give you access on the projects you will be working on.

### SSH key

1. [Generate](https://docs.gitlab.com/ee/ssh/#generating-a-new-ssh-key-pair) a new **ED25519** SSH key pair.
2. [Add](https://docs.gitlab.com/ee/ssh/#adding-an-ssh-key-to-your-gitlab-account) an SSH key to your GitLab account.

### GUI client

We recommend using [Sourcetree](https://www.sourcetreeapp.com). We do not offer support for other GUI clients, but feel free to use the one you master.

### Project source code

1. Create `$HOME/projects/aerowebb/frontend` directory.
2. Clone project from the GUI client or run the following command:

```bash
cd ~/projects/aerowebb
git clone git@gitlab.com:2moro/aero-webb/frontend_aerowebb.git frontend
```

## Visual Studio Code

1. [Install](https://code.visualstudio.com/download) Visual Studio Code (version Windows 10 64 bit).
2. Refer to README.md file to install and/or activate required extensions; you can use additional extensions if they do not conflict with the required ones.

## Npm registry

Create `$HOME/.npmrc` file:

```
registry=http://192.168.2.36:8081/repository/npm-all/
@2moro:registry=http://192.168.2.36:8081/repository/npm-2moro-central/
```

## Yarn

[Install](https://classic.yarnpkg.com/fr/docs/install/#windows-stable) the last stable version.

### Docker

1. [Install](https://hub.docker.com/editions/community/docker-ce-desktop-windows) Docker Desktop
2. Add Docker extension to Visual Studio Code
3. Setup:

```bash
docker build -t aerowebb-frontend .
docker run --rm -it --name aerowebb-front -p 4200:4200 -v /usr/src/app/node_modules -v $HOME/projects/aerowebb/frontend:/usr/src/app aerowebb-frontend:latest yarn run serve --host 0.0.0.0
```

## Optional

### Linux

Enjoy a GNU/Linux environment directly on Windows, unmodified, without the overhead of a virtual machine.

1. [Install](https://docs.microsoft.com/en-us/windows/wsl/install-win10) **Debian GNU/Linux**, or the Linux districution of your choice.
2. [Initialize](https://docs.microsoft.com/en-us/windows/wsl/initialize-distro) your newly installed Linux distribution.
3. Setup your development environment:

```bash
sudo apt install git

sudo apt install curl gnupg
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```
