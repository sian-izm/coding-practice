# -*- coding: utf-8 -*-
begin
  x = 10
  y = "a"
  p x + y
rescue => ex
  puts(ex.message)
ensure
  puts("足し算をしました")
end
