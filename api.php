<?php
  include_once('include/config.php');
  include_once('include/functions.php');
  
  if     ($_GET['action'] == 'blog')          	{ $data = getBlogPosts(); } 
  elseif ($_GET['action'] == 'blog_details')  	{ $data = getBlogById($_GET['blogId']); }
  
  elseif ($_GET['action'] == 'jobs')        	 	{ $data = getJobs(); } 
  elseif ($_GET['action'] == 'skills')        	{ $data = getSkills(); } 

  elseif ($_GET['action'] == 'portfolio')				{ $data = getProjects(); }
  elseif ($_GET['action'] == 'project_details') { $data = getProjectById($_GET['projectId']); }



  echo prepareJsonOutput(1, $data);
  
?>
