
# Library Import ----------------------------------------------------------

library(rvest)
library(tidyverse)
library(beepr)
library(purrr)

# Pulling One Set of Text -------------------------------------------------

#Here I am going to attempt to pull one page of everything related to digestive health

####NO MATTER WHAT NUMBER I PUT HERE, IT JUST RETURNS THE FIRST PAGE 
digestive_health <-  read_html("https://messageboards.webmd.com/health-conditions/f/digestive-health#pi37=9") %>%
  html_nodes('.thread-body') %>%
  html_text()

digestive_health


# Post Retrieval -----------------------------------------------------------

#function to get the posts from each page
## FOR THE FUTURE: grabbing multiple parts of the comments (title, date, etc.)
get_posts <- function(x){
  url <- sprintf("https://messageboards.webmd.com/health-conditions/f/digestive-health/#pi37=", x)
  
  website <- read_html(url)
  
  comments <- html_nodes(website, '.thread-body') %>% 
    html_text() %>% 
    as_tibble()
  
  #creating a dataframe, multiple inputs can be put here to create the entire dataframe
  data.frame(comments)
 
}


# Other Function for post retrieval ---------------------------------------
pages <- 1:20
base_url <- "https://messageboards.webmd.com/health-conditions/f/digestive-health/#pi37="
urls <- paste0(base_url, pages)


get_post2 <- function(url){
  url %>% 
    read_html() %>% 
    html_nodes('.thread-body') %>% 
    html_text()
  
}



# Function to all pages ---------------------------------------------------
#applying the function to all urls, creating a data frame
digestive_health_all <- map_df(1:20, get_posts); 


#2nd function
dig_health_all2 <- sapply(urls, get_post2) %>% 
  data.frame(); beep("coin")
