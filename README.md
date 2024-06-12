# Plastic Pollution Info Page Project

In April 2024 we began the [Tech Labs Digital Shapers Program](https://techlabs.org/). A three month bootcamp providing tech training in web development, data science, AI and UX design. As part of this bootcamp we have made this project to demonstrate what we have learnt.

Our team was set the task of creating a project on the theme of 'sustainabilty'. We brainstormed various ideas of current sustainability problems the world faces and decided on the problem of plastic pollution.

### Our goal:

To make an informative website showing the scale and impact of plastic waste and what can be done to tackle this problem.

### The team:

Marco Lolaico - Data Science Track

Krystyna Sajak - Web Development Track

Jack Dickinson - Web Development Track

### Mentors:

Davide Laezza and Jorge Andre

## Project summary
This project aims to inform the visitor of the website about the scale and damage caused by plastic pollution. This is achieved through building a modern, well-designed website that concisely delivers information in a way that can be easily understood. The project also includes a novel data analysis of available plastic pollution data. This aims to effectively represent data in a way that makes clear the dire situation of plastic pollution. While the problem is a global one, the website is aimed at European visitors. Data on specific countries has been limited to what is available from reliable sources.

## Background of the project
The world produces 430 million tonnes of plastic per year. The majority of which has a short life cycle (1).  The devastating effects of this waste are well documented and not going away. While consumer and commercial recycling of plastic is widespread in many areas, this is not a long-term solution.

“We will not recycle our way out of the plastic pollution crisis: we need a systemic transformation to achieve the transition to a circular economy”
Inger Andersen, UN environment programme executive director
  
To realise the systemic change in society needed to eliminate plastic pollution, there must be the political will. As with many environmental causes, there is the need to battle against the economic forces that have got us to where we are today: there is no financial incentive to reduce plastic waste, so the problem can only be solved through regulation by governments.
For this regulation to be put in place, the people must demand it. 

## What is the problem?
People do not know enough about the effects of plastic pollution.

## Which methods / tools did we use to solve the problem?
A rough draft of the website was made in Figma to get an idea of what the website might look like. We then built our project site using the React JavaScript library. The website was designed with bootstrap and custom CSS styling. All data analysis and data representations were made with python.

## How exactly did we go about it?
To begin this project, we first clearly defined the problem and solution. As mentioned earlier, the problem is that people are not sufficiently informed about the harms and scale of plastic pollution. The solution is to make a well-designed website with clearly presented information and data that can help people make good decisions on plastic use and show what can be done to solve this problem.
The project was divided into two parts. The construction and design of the website by Jack and Krystyna, and the data analysis by Marco.

### Website design and construction:

Without any UX/UI designer on our team, Jack took on the role. He first made a rough plan in Figma to get an idea of what the website should look like. This is shown below.

![Figma Design](https://github.com/Krystynka86/plastic-pollution-guide/blob/main/Figma_design.png?raw=true "Figma Design")

Jack then began work on building the separate web pages in HTML and styling with bootstrap and custom CSS.
In the meantime, Krystyna produced the react project and the framework of the website. She solved the problem of navigation between pages using the React Router. This is a popular solution to this problem which allows the creation of a single page application. Instead of new pages being loaded with new HTTP requests, they are loaded as separate react components.

### Data Analysis:

Marco was in charge of the data analysis and visualization. He started by finding publicly available data about plastic production and plastic waste. The source of the data used are:

- OECD for the data related to countries that are part of the organisation and for the global plastic production data
- EPA.gov for the data related to the USA
- Meijer et al. (2021). More than 1000 rivers account for 80% of global riverine plastic emissions into the ocean. Science Advances. https://doi.org/10.1126/sciadv.aaz5803
- Geyer et al., Production, use, and fate of all plastics ever made. Sci. Adv.3, e1700782(2017). DOI:10.1126/sciadv.1700782

Marco exported the data in csv format from the different databases and manually filtering the data when necessary, using Google Sheets. He then developed different Python scripts to load and clean the data, depending on what kind of analysis and visualisation was needed. The packages used were mainly pandas for the loading, cleaning and handling the data in general, then matplotlib and seaborn for the data visualisation. The geopandas package was also used to visualise the data for mismanaged plastic waste on a map. The graphs are then saved as svg files, to ensure a proper visualisation on the homepage.


### Coming together:

Once we had completed our separate parts of the project. They could be put together. The HTML written by Jack was converted to JSX and copied into the react project made by Krystyna. We also copied the custom CSS file into the project and linked it to the Index.js file. With a little help from our mentor Davide, it worked first time. Beautiful.

Marco’s data could now be added into the Country Data page. We made a new navigation inside the page for each country’s data. This used the same React Router tool we used for the individual pages. Having made this work before, there were no problems, and it was running in no time.

## What is our solution to the problem? 
We have built a functioning website, soon to be deployed on GitHub Pages. It informs the reader of the problems of plastic pollution, while also offering advice on things they can do to help.

## What are the key findings of our project? 

We have learnt many skills from the web development and data sciences tracks we took. There are also many things we have learnt from working as a team on this project.

- Dividing tasks amongst team members: making sure we were working efficiently and had the most important tasks covered without doing things twice.
- Effective communication: this was important while dividing tasks and making sure we were ready to come together and share what we had made.
- The importance of UX design: without a dedicated UX designer we needed to come up with something ourselves. While we had 2 team members learning web developement, actually designing something thta looks good is a whole other skill, but one that was fun to try!
- Technical skills: We of course honed our skills in various technologies, such as: React, bootstrap and python libraries like Pandas and Matplotlib.
- Sustainability awareness: while the focus of the project was a technical one to showcase our skills, we also learnt more about the plastic pollution crisis and what we can do to help.
- Building a website takes a long time: this may be the first time we have built a website. But I underestimated the amount of time it takes to produce a good looking webpage. I hope this is something I can get better at with time.

## What is the impact of this project? 

The website will soon be hosted on GitHub Pages. Where anyone will be able to view it and be informed of plastic pollution. Long term this can hopefully make a difference to peoples perception of the plastic pollition crisis the world faces today.

## What next?

We will continue to work on this project to make improvements to the design and functionality. There are many design adjustsments to make. Some features that may be added in the future are:
- forum section
- sustainability quiz
- plastic identification guide
- recycling process overview
- interactive map showing recycling rates
- map of recycling points in the local area
- leaderboard of countries with the best plastic recycling
- interactive quiz
- q and a on plastic waste
  
## References	
- https://www.un.org/sustainabledevelopment/blog/2023/08/explainer-what-is-plastic-pollution/
- https://data.oecd.org/
- https://www.epa.gov/
- Meijer et al. (2021). More than 1000 rivers account for 80% of global riverine plastic emissions into the ocean. Science Advances. https://doi.org/10.1126/sciadv.aaz5803
- Geyer et al., Production, use, and fate of all plastics ever made. Sci. Adv.3, e1700782(2017). https://doi.org/10.1126/sciadv.1700782
