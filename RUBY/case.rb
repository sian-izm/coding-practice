def test_case(v) 
  case v
  when 1
    p "hoge"
  end
end

if test_case(2)
  p "tru"
end
