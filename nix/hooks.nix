{ inputs, ... }:
{
  imports = [
    (inputs.git-hooks + /flake-module.nix)
  ];
  perSystem = {
    pre-commit.settings = {
      hooks = {
        nixfmt.enable = true;
        biome.enable = true;
      };
    };
  };
}
