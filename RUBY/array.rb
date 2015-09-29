# -*- coding: utf-8 -*-
class Car
  def setName(str)
    @name = str
  end
  
  def dispName()
    print(@name, "¥n")
  end
end

car1 = Car.new()
car1.setName("crown")

car1 ||= Car.new()
car2.setName("civic")

car1.dispName()
car2.dispName()
