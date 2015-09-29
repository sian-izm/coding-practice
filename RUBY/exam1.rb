# -*- coding: utf-8 -*-
class Text
  attr_reader :title, :display_order, :context
  def initialize(title: nil, display_order: nil, context: nil, list_id: nil)
    @title         = title
    @display_order = display_order
    @context       = context
    @list_id       = list_id
  end

end

class Image
  attr_reader :title, :display_order, :url
  def initialize(title, display_order, url, list_id)
    @title         = title
    @display_order = display_order
    @url           = url
    @list_id       = list_id
  end
end

class List
  attr_accessor :public_at
  attr_reader :title, :description
  
  def initialize(title, description)
    @title        = title
    @descripttion = description
    @created_at   = Time.now
    @public_at    = nil
  end

  def publishable?
    return false if @public_at.nil?
    @public_at >= Time.now
  end

  def update_publish_date(publish_date) 
    @public_at = publish_date
  end
  
end



list = List.new("test_title", "test_description")
if list.publishable?
  p "true"
end

p list.public_at
list.update_publish_date("2015-10-01 00:00:00")
p list.public_at

if list.publishable?
  p "true"
end
