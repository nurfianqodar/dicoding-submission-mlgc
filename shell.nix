{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShellNoCC {  
  name = "dicoding-submission-mlgc";
  packages = with pkgs; [
    nodejs_18
    stdenv.cc.cc
  ];

  NIX_LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
    pkgs.stdenv.cc.cc
  ];
  NIX_LD = pkgs.lib.fileContents "${pkgs.stdenv.cc}/nix-support/dynamic-linker";

  shellHook = ''
    export PATH="$PWD/node_modules/.bin/:$PATH"
    export APP_PORT=3000
    export PATH="$HOME/Apps/google-cloud-sdk/bin:$PATH"
    export TF_ENABLE_ONEDNN_OPTS=0
    export LD_LIBRARY_PATH=$NIX_LD_LIBRARY_PATH
  '';
}
