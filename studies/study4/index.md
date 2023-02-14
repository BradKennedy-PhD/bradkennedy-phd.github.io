---
layout: page
title: Study 4
hide_hero: true
hide_footer: true
menubar_toc: true
---
{% include notification.html
message="This page is not operational."
icon="false" status="is-danger" %}

# Study 4

***

## Description
Description here


## Dataset
Link to dataset here

<html>
    <div>
      <h2>Analysis</h2>
      <p>To read through the analysis and results:</p>
      <ul id="html_list">
      </ul>
    </div>
    
    <script>
      const filterFiles1 = (filter) => {
        filter = filter.toLowerCase()
        return (file) => {
          const filePath = file.path;
          const fileName = file.path.replace('.html', '').toLowerCase().replace(/-/g, ' ').replace('studies/study4/analysis/', '');
          const isHTML = (/.html$/).test(filePath);
          return isHTML;
        }
      }
      
      const renderList1 = (data, filter = '') => {
        let htmlString = '<ul>';
        for (let file of data.filter(filterFiles1(filter))) {
          const filePath = file.path.replace('.html', '');
          const fileName = file.path.replace('.html', '').toLowerCase().replace(/-/g, ' ').replace('studies/study4/analysis/', '');
          htmlString += `<li><a href="https://bradkennedy-phd.github.io/${filePath}" target="_blank" rel="noopener noreferrer">View analysis script as webpage (HTML) [${fileName}] </a><i class="fas fa-external-link-alt"></i></li>`;
        }
      htmlString += '</ul>';
        document.getElementById('html_list').innerHTML = htmlString;
      }
      
      (async () => {
        const response = await fetch('https://api.github.com/repos/BradKennedy-PhD/bradkennedy-phd.github.io/contents/studies/study4/analysis');
        const data = await response.json();
        renderList1(data);
      })()
    </script>
</html>

<html>
<div>
<p>For reproducibility, you can rerun the analysis using the R Markdown file:</p>
<ul id="rmd_list">
      </ul>
    </div>
    
    <script>
      const filterFiles2 = (filter) => {
        filter = filter.toLowerCase()
        return (file) => {
          const filePath = file.path;
          const fileName = file.path.toLowerCase().replace(/-/g, ' ').replace('studies/study4/analysis/', '');
          const isRMD = (/.Rmd$/).test(filePath);
          return isRMD;
        }
      }
      
      const renderList2 = (data, filter = '') => {
        let htmlString = '<ul>';
        for (let file of data.filter(filterFiles2(filter))) {
          const filePath = file.path;
          const fileName = file.path.replace('.Rmd', '').toLowerCase().replace(/-/g, ' ').replace('studies/study4/analysis/', '');
          htmlString += `<li><a href="https://bradkennedy-phd.github.io/${filePath}" target="_blank" rel="noopener noreferrer">DOWNLOAD analysis script as R Markdown file [${fileName}] </a><i class="fas fa-external-link-alt"></i></li>`;
        }
      htmlString += '</ul>';
        document.getElementById('rmd_list').innerHTML = htmlString;
      }
      
      (async () => {
        const response = await fetch('https://api.github.com/repos/BradKennedy-PhD/bradkennedy-phd.github.io/contents/studies/study4/analysis');
        const data = await response.json();
        renderList2(data);
      })()
    </script>
</html>


## Materials
Link to materials here

## Open Science Framework
Link to OSF here

## Other:
Interactive results etc.


