---
layout: page
title: Material Development Study
hide_hero: true
hide_footer: true
show_sidebar: false
menubar: main_menu
---

# Material Development Study

---

## Description

This online study examined the social opinions of various job roles and working sectors.

## Open Science Framework
<a href="https://osf.io/w279r/" target="_blank" rel="noopener noreferrer">View OSF Project Page <i class="fas fa-external-link-alt"></i></a>

<a href="https://osf.io/hv3p4/" class="button is-primary" target="_blank" rel="noopener noreferrer">View Materials <i class="fas fa-external-link-alt"></i></a>

<a href="https://osf.io/rck5h/" class="button is-primary" target="_blank" rel="noopener noreferrer">View Data <i class="fas fa-external-link-alt"></i></a>

<a href="https://osf.io/2b5tz/" class="button is-primary" target="_blank" rel="noopener noreferrer">View Analysis <i class="fas fa-external-link-alt"></i></a>


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
          const fileName = file.path.replace('.html', '').replace(/-/g, ' ').replace('studies/matdev/analysis/', '');
          const isHTML = (/.html$/).test(filePath);
          return isHTML;
        }
      }
      
      const renderList1 = (data, filter = '') => {
        let htmlString = '<ul>';
        for (let file of data.filter(filterFiles1(filter))) {
          const filePath = file.path.replace('.html', '');
          const fileName = file.path.replace('.html', '').replace(/-/g, ' ').replace('studies/matdev/analysis/', '');
          htmlString += `<li><a href="https://bradkennedy-phd.github.io/${filePath}" target="_blank" rel="noopener noreferrer">View analysis script as webpage (HTML) [${fileName}] </a><i class="fas fa-external-link-alt"></i></li>`;
        }
      htmlString += '</ul>';
        document.getElementById('html_list').innerHTML = htmlString;
      }
      
      (async () => {
        const response = await fetch('https://api.github.com/repos/BradKennedy-PhD/bradkennedy-phd.github.io/contents/studies/matdev/analysis');
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
          const fileName = file.path.replace(/-/g, ' ').replace('studies/matdev/analysis/', '');
          const isRMD = (/.Rmd$/).test(filePath);
          return isRMD;
        }
      }
      
      const renderList2 = (data, filter = '') => {
        let htmlString = '<ul>';
        for (let file of data.filter(filterFiles2(filter))) {
          const filePath = file.path;
          const fileName = file.path.replace('.Rmd', '').replace(/-/g, ' ').replace('studies/matdev/analysis/', '');
          htmlString += `<li><a href="https://bradkennedy-phd.github.io/${filePath}" target="_blank" rel="noopener noreferrer">DOWNLOAD analysis script as R Markdown file [${fileName}] </a><i class="fas fa-external-link-alt"></i></li>`;
        }
      htmlString += '</ul>';
        document.getElementById('rmd_list').innerHTML = htmlString;
      }
      
      (async () => {
        const response = await fetch('https://api.github.com/repos/BradKennedy-PhD/bradkennedy-phd.github.io/contents/studies/matdev/analysis');
        const data = await response.json();
        renderList2(data);
      })()
    </script>
</html>

## Other

<a href="http://apps.bradleykennedy.co.uk/pilotdata/" class="button is-primary" target="_blank" rel="noopener noreferrer">View Interactive Results <i class="fas fa-external-link-alt"></i></a>