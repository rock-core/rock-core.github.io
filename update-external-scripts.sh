#!/bin/bash

if [ ! -d downloads ]; then
    echo "Subdirectory 'downloads' not found. Make sure you run this script in the toplevel folder of rock-core.github.io"
    exit 0
fi

wget https://raw.githubusercontent.com/rock-core/buildconf/master/bootstrap.sh -O downloads/bootstrap.sh
wget https://raw.githubusercontent.com/rock-core/autoproj/master/bin/autoproj_bootstrap -O downloads/autoproj_bootstrap
