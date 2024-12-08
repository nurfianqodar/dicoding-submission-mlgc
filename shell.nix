{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShellNoCC {  
  name = "dicoding-submission-mlgc";
  packages = with pkgs; [
    nodejs_22
  ];

  shellHook = ''
    export PATH="$PWD/node_modules/.bin/:$PATH"
    export APP_PORT=3000
  ''
}
