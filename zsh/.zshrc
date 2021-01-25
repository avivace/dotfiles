# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# zprezto
source "${ZDOTDIR:-$HOME}/.zprezto/init.zsh"

# pip installs binaries in ~/.local/bin
export PATH=~/.local/bin:$PATH

# keychain
keychain ~/.ssh/id_ed25519

# p10k configuration
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
