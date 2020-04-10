# This script extracts information from the WebMD message board on heasrt health
# For every post we extract: title, text, date, and tags (if any)
# Library Import ----------------------------------------------------------

library(rvest)
library(tidyverse)
library(purrr)



# Post Retrieval -----------------------------------------------------------

# Function to get the required information from a xml_node obtained
# function requires the web address of the site of interest
get_post_df <- function(page){
  df <- read_html(page) %>% 
    html_nodes('.forum-thread') %>%    # select enclosing nodes
    # iterate over each, pulling out desired parts and coerce to data.frame
    map_df(~list(
      title = html_nodes(.x, '.unread') %>%
        html_text() %>% 
        {if(length(.) == 0) NA else .}, 
      comment = html_nodes(.x, '.thread-body') %>% 
        html_text() %>% 
        {if(length(.) == 0) NA else .},
      tags = html_nodes(.x, '.tag-list') %>% 
        html_text() %>% 
        {if(length(.) == 0) NA else .},    # replace length-0 elements with NA
      date = html_nodes(.x, '.thread-ago') %>% 
        html_text() %>%    
        {if(length(.) == 0) NA else .}
    )
    )
  return(df)
}

# Define all possible sites ---------------------------------------
pages <- 1:82
base_url <- "https://messageboards.webmd.com/health-conditions/f/heart-health?pi37="
urls <- paste0(base_url, pages)

# Apply function to vector of addresses and save in data frame format
big_webmd_df <- map_df(urls, get_post_df)

# Write results to .csv file
write_csv(big_webmd_df, "big_webmd_df.csv")

