---
layout: page
title: Study 2 - Job Status
hide_hero: true
hide_footer: true
show_sidebar: false
menubar: main_menu
---
# Experiment 2 - Job Status

## 🧠 Background

* Earlier studies often used neutral or powerful characters.
* This experiment asked whether the **status of a person’s job** role would influence judgements of intention and responsibility.

## 🧪 Method

* Participants: 100 people.
* Each read stories where the main character’s job was described as either high-status or low-status.
* They then rated how intentional the side-effect seemed and how much responsibility they felt the character deserved.

## 📊 Findings

* **No significant difference** was found between high-status and low-status roles.
* Job role did not appear to change how people judged intention or responsibility.

## 💬 Summary

People’s judgements of intention and responsibility seemed unaffected by the social status of the character’s job. This suggested that job hierarchy alone does not shape moral judgements in this context.

## Open Science Framework
<a href="https://osf.io/kncea/" target="_blank" rel="noopener noreferrer">View OSF Project Page <i class="fas fa-external-link-alt"></i></a>

<a href="https://osf.io/pybv4/" class="button is-primary" target="_blank" rel="noopener noreferrer">View Materials <i class="fas fa-external-link-alt"></i></a>

<a href="https://osf.io/gz5yd/" class="button is-primary" target="_blank" rel="noopener noreferrer">View Data <i class="fas fa-external-link-alt"></i></a>

<a href="https://osf.io/dp5fm/" class="button is-primary" target="_blank" rel="noopener noreferrer">View Analysis <i class="fas fa-external-link-alt"></i></a>

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
          const fileName = file.path.replace('.html', '').replace(/-/g, ' ').replace('studies/study2job/analysis/', '');
          const isHTML = (/.html$/).test(filePath);
          return isHTML;
        }
      }
      
      const renderList1 = (data, filter = '') => {
        let htmlString = '<ul>';
        for (let file of data.filter(filterFiles1(filter))) {
          const filePath = file.path.replace('.html', '');
          const fileName = file.path.replace('.html', '').replace(/-/g, ' ').replace('studies/study2job/analysis/', '');
          htmlString += `<li><a href="https://bradkennedy-phd.github.io/${filePath}" target="_blank" rel="noopener noreferrer">View analysis script as webpage (HTML) [${fileName}] </a><i class="fas fa-external-link-alt"></i></li>`;
        }
      htmlString += '</ul>';
        document.getElementById('html_list').innerHTML = htmlString;
      }
      
      (async () => {
        const response = await fetch('https://api.github.com/repos/BradKennedy-PhD/bradkennedy-phd.github.io/contents/studies/study2job/analysis');
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
          const fileName = file.path.replace(/-/g, ' ').replace('studies/study2job/analysis/', '');
          const isRMD = (/.Rmd$/).test(filePath);
          return isRMD;
        }
      }
      
      const renderList2 = (data, filter = '') => {
        let htmlString = '<ul>';
        for (let file of data.filter(filterFiles2(filter))) {
          const filePath = file.path;
          const fileName = file.path.replace('.Rmd', '').replace(/-/g, ' ').replace('studies/study2job/analysis/', '');
          htmlString += `<li><a href="https://bradkennedy-phd.github.io/${filePath}" target="_blank" rel="noopener noreferrer">DOWNLOAD analysis script as R Markdown file [${fileName}] </a><i class="fas fa-external-link-alt"></i></li>`;
        }
      htmlString += '</ul>';
        document.getElementById('rmd_list').innerHTML = htmlString;
      }
      
      (async () => {
        const response = await fetch('https://api.github.com/repos/BradKennedy-PhD/bradkennedy-phd.github.io/contents/studies/study2job/analysis');
        const data = await response.json();
        renderList2(data);
      })()
    </script>
</html>