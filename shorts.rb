
####This Returns a random color in hex form that is readable (limited colors)
def randomcolor()
  ("#" +(3+rand(6)).to_s + "f"+(3+rand(6)).to_s  + "f"+(3+rand(6)).to_s  + "f").to_s
end

####This will require any input and then clear screen
def enterclear()
  gets
  print `clear`
end

