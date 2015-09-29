# -*- coding: utf-8 -*-
require 'net/http'

def fetch(uri_str, limit = 10)
  # You should choose a better exception.
  raise ArgumentError, 'too many HTTP redirects' if limit == 0

  response = Net::HTTP.get_response(URI(uri_str))

  case response
  when Net::HTTPSuccess then
    response
  when Net::HTTPRedirection then
    location = response['location']
    warn "redirected to #{location}"
    print response.value
    fetch(location, limit - 1)
  else
    response.value
  end
end

print fetch('http://mery.jp/hoge')
# print fetch('http://www.nike.com/jp/ja_jp/c/justdoit2015?cp=jp_brm_br_su15_05222015_bfi_edi_nike_button_mery_hp')


pv = Pageview.where(list_id: 8927);


require 'rake'
Rails.application.load_tasks
Rake::Task['one_time_task:create_missing_pageview_2411'].execute

tag = Tag.where(id: 10137)
tag.update_all(html_title: "「オフィスネイル」について")
tag.update_all(html_title: nil)
