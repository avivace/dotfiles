" vimrc - e560 - avivace

set nocompatible              " be iMproved, required
filetype off                  " required

" If vim-plug is not found, install it and every plugin
if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

" Plugins
call plug#begin('~/.vim/plugged')
  Plug 'connorholyday/vim-snazzy'
  Plug 'itchyny/lightline.vim'
call plug#end()

" Color scheme
syntax on
set t_Co=256
colorscheme snazzy

let g:lightline = {
\ 'colorscheme': 'snazzy',
\ }

" Show airline
set laststatus=2

" .pl for prolog, not perl
au BufRead,BufNewFile *.pl set filetype=prolog

" jj brings you the normal mode
:imap jj <Esc>

" Indentation
set tabstop=2
set shiftwidth=2
set softtabstop=2
set expandtab

" Code readability
set number
set colorcolumn=80

" Disable BCE
if &term =~ '256color'
  set t_ut=
endif
