#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '

########
#ALCI
########
alias evb='sudo systemctl enable --now vboxservice.service'
            __main() {
                local major="${BASH_VERSINFO[0]}"
                local minor="${BASH_VERSINFO[1]}"

                if ((major > 4)) || { ((major == 4)) && ((minor >= 1)); }; then
                    source <(/usr/bin/starship init bash --print-full-init)
                else
                    source /dev/stdin <<<"$(/usr/bin/starship init bash --print-full-init)"
                fi
            }
            __main
            unset -f __main

PF_INFO="title os host kernel uptime pkgs memory" pfetch
[[ $- == *i* ]] && . /usr/share/blesh/ble.sh
