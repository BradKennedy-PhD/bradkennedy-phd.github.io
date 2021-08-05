---
layout: page
title: Study 1
hide_hero: true
hide_footer: true
menubar_toc: true
---
# Study 1
## _Subtitle_

***

## Description
Description here

## Dataset
Link to dataset here

<html>
    <div>
      <h2>Analysis</h2>
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
          htmlString += `<li><a href="https://bradkennedy-phd.github.io/Study1/${filePath}" target="_blank" rel="noopener noreferrer">R Markdown of Analysis </a><i class="fas fa-external-link-alt"></i></li>`;
        }
      htmlString += '</ul>';
        document.getElementById('html_list').innerHTML = htmlString;
      }
      
      (async () => {
        const response = await fetch('https://api.github.com/repos/BradKennedy-PhD/study1/contents/analysis');
        const data = await response.json();
        renderList1(data);
      })()
    </script>
</html>

## Materials
Link to materials here

## Open Science Framework
Link to OSF here

## Other:
Interactive results etc.

