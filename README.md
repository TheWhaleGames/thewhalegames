# The Whale Games

## Getting Started

```
$ git clone https://github.com/TheWhaleGames/thewhalegames.git
$ vagrant plugin install vagrant-librarian-chef-nochef # Run chef when machine fires up
$ vagrant up
$ vagrant ssh
$ gem install bundler
$ bundle install
$ bundle exec middleman
```

You are ready to go! Open [http://localhost:4567](http://localhost:4567)

## Build & Deploy

Copy `.env.sample` to `.env` then fill out host, path, etc.

```
$ bundle exec middleman build
$ bundle exec middleman deploy
```
