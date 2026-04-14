{ ... }:
{
  perSystem =
    {
      config,
      pkgs,
      self',
      ...
    }:
    {
      formatter = pkgs.nixfmt;

      devShells.default = pkgs.mkShell {
        name = "portfolio-devshell";
        inputsFrom = [
          config.pre-commit.devShell
        ];
        packages = with pkgs; [
          pkg-config
          openssl
          nettle

          nodejs

          just
        ];
        shellHook = ''
          echo 1>&2 "🧬: $(nix eval --raw --impure --expr 'builtins.currentSystem')"
          echo 1>&2 "Ready to work!"
        '';
      };
    };
}
