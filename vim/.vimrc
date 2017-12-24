" vimrc - e560 - avivace

set nocompatible              " be iMproved, required
filetype off                  " required

" If it's the first start, install vim-plug and every plugin
if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

" vim plug
call plug#begin('~/.vim/plugged')
  Plug 'vim-airline/vim-airline'
  Plug 'vim-airline/vim-airline-themes'
  Plug 'airblade/vim-gitgutter'
  Plug 'chrisbra/Colorizer'
  Plug 'scrooloose/nerdtree'
  Plug 'crusoexia/vim-monokai'
  Plug 'godlygeek/tabular'
  Plug 'ConradIrwin/vim-bracketed-paste/'
call plug#end()

" color scheme
syntax on
set t_Co=256

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

colorscheme monokai
let g:airline_theme='powerlineish'
let g:airline_powerline_fonts=1
