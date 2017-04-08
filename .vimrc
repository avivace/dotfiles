" vimrc - e560 - avivace

set nocompatible              " be iMproved, required
filetype off                  " required

" vim plug
call plug#begin('~/.vim/plugged')
  Plug 'airblade/vim-gitgutter'
  Plug 'chrisbra/Colorizer'
  Plug 'scrooloose/nerdtree'
  Plug 'chrisbra/Colorizer'
  Plug 'crusoexia/vim-monokai'
  Plug 'godlygeek/tabular'
  Plug 'plasticboy/vim-markdown'
call plug#end()

" color scheme
syntax on
colorscheme monokai
set t_Co=256

" powerline
python3 from powerline.vim import setup as powerline_setup
python3 powerline_setup()
python3 del powerline_setup

" show powerline:
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
