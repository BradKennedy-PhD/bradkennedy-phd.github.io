---
layout: page
title: Pilot Study
subtitle: Understanding current social opinions of job roles and sectors of work
hide_hero: true
hide_footer: true
menubar_toc: true
---
## Description
This online study examined the social opinions of various job roles and working sectors.

## Dataset

## Analysis
<html>
    <div>
      <h2>Files in repo</h2>
      <ul id="html_list">
      </ul>
    </div>
    
    <script>
      const filterFiles1 = (filter) => {
        filter = filter.toLowerCase()
        return (file) => {
          const filePath = file.path;
          const fileName = file.path.replace('.html', '').toLowerCase().replace(/-/g, ' ');
          const isHTML = (/.html$/).test(filePath);
          return isHTML;
        }
      }
      
      const renderList1 = (data, filter = '') => {
        let htmlString = '<ul>';
        for (let file of data.filter(filterFiles1(filter))) {
          const filePath = file.path.replace('.html', '');
          const fileName = file.path.replace('.html', '').toLowerCase().replace(/-/g, ' ');
          htmlString += `<li><a href="https://github.com/BradKennedy-PhD/Pilot-study/master/analysis/${filePath}">${fileName}</a></li>`;
        }
      htmlString += '</ul>';
        document.getElementById('html_list').innerHTML = htmlString;
      }
      
      (async () => {
        const response = await fetch('https://api.github.com/repos/BradKennedy-PhD/Pilot-study/contents/analysis');
        const data = await response.json();
        renderList1(data);
      })()
    </script>
</html>

[R Script](/Pilot-study/Pilot-analysis-markdown)

## Materials

## Open Science Framework
[OSF](https://osf.io/w279r/)


## Other:
Interactive results available [here](http://apps.bradleykennedy.co.uk/pilotdata/)  
Poster available at [Figshare](https://doi.org/10.6084/m9.figshare.6860342.v1)  
