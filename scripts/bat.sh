#!/bin/bash
# Battery status (systray)
AC=$(</sys/class/power_supply/AC/online)

# Battery is online: ICON % [CHARGING ICON]
if [ -f /sys/class/power_supply/BAT0/capacity ]; then
  killall compton
  BAT=$(</sys/class/power_supply/BAT0/capacity)
  if [ $BAT -lt 10 ]; then
    echo ""
  elif [ $BAT -gt 10 ] && [ $BAT -lt 30 ]; then
    echo ""
  elif [ $BAT -gt 30 ] && [ $BAT -lt 60 ]; then
    echo ""
  elif [ $BAT -gt 60 ] && [ $BAT -lt 80 ]; then
    echo ""
  elif [ $BAT -gt 80 ]; then
    echo ""
  fi
  echo "$BAT%"
  # Online and charging
  if [ $AC -eq 1 ]; then
    echo ""
  fi
else
  # AC only
  echo ""
fi
