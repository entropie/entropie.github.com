#
#
# Author:  Michael 'entropie' Trommer <mictro@gmail.com>
#

task :jquery do
  mkdir_p "script"
  sh "wget \"http://jqueryjs.googlecode.com/files/jquery-1.3.2.js\" -O script/jquery.js"
end

task :baseline do
  mkdir_p "css"
  mkdir_p "tmp"

  Dir.chdir("tmp") do
    sh "git clone git://github.com/entropie/baseline.git"
    Dir["baseline/css/*.css"].each do |baseline_source|
      cp baseline_source, "../css"
    end
  end
  rm_r "tmp"
end

task :hamlize do
  ruby "../../bin/hamlize ."
end



=begin
Local Variables:
  mode:ruby
  fill-column:70
  indent-tabs-mode:nil
  ruby-indent-level:2
End:
=end
