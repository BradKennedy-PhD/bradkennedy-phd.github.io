---
layout: page
title: Pilot Study
hide_hero: true
hide_footer: true
menubar_toc: true
---

# Pilot Study

---

## Description

This online study examined the social opinions of various job roles and working sectors.

## Dataset

Link to dataset here

<html>
    <div>
      <h2>Analysis</h2>
      <h4>To read through the analysis and results:</h4>
      <ul id="html_list">
      </ul>
    </div>
    
    <script>
      const filterFiles1 = (filter) => {
        filter = filter.toLowerCase()
        return (file) => {
          const filePath = file.path;
          const fileName = file.path.replace('.html', '').toLowerCase().replace(/-/g, ' ').replace('analysis/', '');
          const isHTML = (/.html$/).test(filePath);
          return isHTML;
        }
      }
      
      const renderList1 = (data, filter = '') => {
        let htmlString = '<ul>';
        for (let file of data.filter(filterFiles1(filter))) {
          const filePath = file.path.replace('.html', '');
          const fileName = file.path.replace('.html', '').toLowerCase().replace(/-/g, ' ').replace('analysis/', '');
          htmlString += `<li><a href="https://bradkennedy-phd.github.io/Pilot-study/${filePath}" target="_blank" rel="noopener noreferrer">View analysis script as webpage (HTML) </a><i class="fas fa-external-link-alt"></i></li>`;
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

<html>
<div>
<h4>For reproducibility, you can rerun the analysis (or just parts of) using the R Markdown file:</h4>
<ul id="rmd_list">
      </ul>
    </div>
    
    <script>
      const filterFiles2 = (filter) => {
        filter = filter.toLowerCase()
        return (file) => {
          const filePath = file.path;
          const fileName = file.path.replace('.Rmd', '').toLowerCase().replace(/-/g, ' ').replace('analysis/', '');
          const isRMD = (/.Rmd$/).test(filePath);
          return isRMD;
        }
      }
      
      const renderList2 = (data, filter = '') => {
        let htmlString = '<ul>';
        for (let file of data.filter(filterFiles2(filter))) {
          const filePath = file.path.replace('.Rmd', '');
          const fileName = file.path.replace('.Rmd', '').toLowerCase().replace(/-/g, ' ').replace('analysis/', '');
          htmlString += `<li><a href="https://bradkennedy-phd.github.io/Pilot-study/${filePath}" target="_blank" rel="noopener noreferrer">DOWNLOAD analysis script as R Markdown file </a><i class="fas fa-external-link-alt"></i></li>`;
        }
      htmlString += '</ul>';
        document.getElementById('rmd_list').innerHTML = htmlString;
      }
      
      (async () => {
        const response = await fetch('https://api.github.com/repos/BradKennedy-PhD/Pilot-study/contents/analysis');
        const data = await response.json();
        renderList2(data);
      })()
    </script>
</html>

## Materials

Link to materials here

## Open Science Framework

[OSF](https://osf.io/w279r/)

## Other:

Interactive results available [here](http://apps.bradleykennedy.co.uk/pilotdata/)  
Poster available at [Figshare](https://doi.org/10.6084/m9.figshare.6860342.v1)
