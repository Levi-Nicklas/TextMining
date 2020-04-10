# Tidy Data
# Author: Levi C Nicklas
#
# Goal: 1) Data is lacking a true id variable for the post; make one.
#       

library(tidyverse)

file_dir <- "../Raw_Data/"

dataset_files <- list.files(file_dir)

print(dataset_files[1])
df1 <- readRDS(paste0(file_dir,dataset_files[1]))

df1 %>% 
  select(title,link,URL) %>% 
  head(20) %>% 
  View()

### INVESTIGATION START ###
# Looks like I can use the post title?
# Check that this is correct...
# I can cross check the post title with the URL which should tell me
# if the post is the same. If the numbers don't match, then I have
# more work to do. 

# by_title <- df1 %>% 
#   group_by(title) %>% 
#   count() 
# 
# by_link <- df1 %>% 
#   group_by(link) %>% 
#   count()
# 
# by_url <- df1 %>% 
#   group_by(URL) %>% 
#   count() 
# 
# # All the came counts are present.
# by_url$n %in% by_title$n
# by_url$n %in% by_link$n
# by_link$n %in% by_title$n

# Upon further inspection, the values are all grouped correctly, but they are ordered
# - in a different manner for whatever reason (?).
### END INVESTIGATION ###


# Going to simply group by post title and assign an ID.
post_title_id <- df1 %>% 
  group_by(title) %>% 
  count()

post_title_id$post_id <- 1:nrow(post_title_id)

df1 <- left_join(df1, post_title_id[,c(1,3)], by = c("title")) %>% 
  select(id, post_id, structure, everything())





