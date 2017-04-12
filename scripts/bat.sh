AC=$(</sys/class/power_supply/AC/online)

if [ -f /sys/class/power_supply/BAT0/capacity ]; then
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
  if [ $AC -eq 1 ]; then
    echo ""
  fi
else
  echo ""
fi
