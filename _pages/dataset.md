---
permalink: /dataset/
author_profile: true
---

{% include base_path %}

This page lists all the datasets we have collected and used in our papers.
To access them, please send an email to me (zhang@cispa.saarland).


<a name="walk2friends"></a>
## walk2friends

This dataset contains over 7M check-ins collected from 403,023 Instagram users in New York, Los Angeles and London in 2015. It also contains social relations among these users.

### Visualization

A day in three cities through the lens of Instagram

<iframe width="100%" height="520" frameborder="0" src="https://charleschang1987.carto.com/builder/729ef880-5d51-459d-91f2-d48db6e3cd00/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

<iframe width="100%" height="520" frameborder="0" src="https://charleschang1987.carto.com/builder/a38bbd77-4d4e-431a-812a-1116abd35591/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

<iframe width="100%" height="520" frameborder="0" src="https://charleschang1987.carto.com/builder/c926bba2-b82b-490d-8ff1-56f7f93b2ff2/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

### Format

city\_5.ano\_checkin: check-ins

| column | meaning |
| :---: | :---: |
| uid | user ID | 
| locid | location ID | 
| lat | latitude | 
| lng | longitude |

city\_5.ano\_friends: social network 

| column | meaning |
| :---: | :---: |
| u1 | user ID | 
| u2 | user ID | 

*city in {ny, la, london}, each user has at least 5 check-ins in the city*

### Stats

|  | New York | Los Angeles | London | 
| :-----: | :-----: | :-----: | :-----: | 
| Number of check-ins | 3,400,138 | 2,410,201 | 1,227,065 | 
| Number of users | 190,753 | 135,088 | 77,182 | 
| Number of locations | 30,546 | 27,115 | 13,686 | 
| Number of social links | 1,621,626 | 1,106,832 | 303,665 | 

### Citation

> @inproceedings{BHPZ17,  
> author = {Michael Backes and Mathias Humbert and Jun Pang and Yang Zhang},  
> title = {walk2friends: Inferring Social Links from Mobility Profiles},  
> booktitle = {Proceedings of the 2017 ACM SIGSAC Conference on Computer and Communications Security (CCS)},  
> pages = {1943-1957},  
> publisher = {ACM},  
> year = {2017}  
> }

<a name="tagvisor"></a>
## Tagvisor

coming soon
