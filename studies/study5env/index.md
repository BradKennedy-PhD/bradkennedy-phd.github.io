---
layout: page
title: Study 5 - Environment
hide_hero: true
hide_footer: true
show_sidebar: false
menubar: main_menu
---
# Experiment 5 - Environment

## 🧠 Background

* The final study built on the unexpected findings of the Power Study.
* It explored how **environmental context and social cues** might shape judgements of intention.

## 🧪 Method

* Participants: 205 people.
* They read stories that placed the character in different environmental contexts (e.g., corporate vs. community settings / in-work versus out-of-work contexts).
* They judged whether the person intended the outcome and how responsible they were.

## 📊 Findings

* No significant interaction between the agent’s environment and their level of power on ratings of blame or intentionality.
* **Significant main effect of environment** on both ratings of blame and intentionality, such that in the in-work scenarios, ratings of blame and intention were higher compared to the out-work scenarios.

## 💬 Summary

* The environment in which an action takes place can influence how people judge the intentions and blameworthiness of the actor.
* Does not support the two main models being tested in this thesis, suggestions are made about an alternative framework that might explain the findings.


## Open Science Framework
<a href="https://osf.io/hyve2/" target="_blank" rel="noopener noreferrer">View OSF Project Page <i class="fas fa-external-link-alt"></i></a>

<a href="https://osf.io/m8ztv/" class="button is-primary" target="_blank" rel="noopener noreferrer">View Materials <i class="fas fa-external-link-alt"></i></a>

<a href="https://osf.io/4gax3/" class="button is-primary" target="_blank" rel="noopener noreferrer">View Data <i class="fas fa-external-link-alt"></i></a>

<a href="https://osf.io/8ta2p/" class="button is-primary" target="_blank" rel="noopener noreferrer">View Analysis <i class="fas fa-external-link-alt"></i></a>


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
          const fileName = file.path.replace('.html', '').replace(/-/g, ' ').replace('studies/study5env/analysis/', '');
          const isHTML = (/.html$/).test(filePath);
          return isHTML;
        }
      }
      
      const renderList1 = (data, filter = '') => {
        let htmlString = '<ul>';
        for (let file of data.filter(filterFiles1(filter))) {
          const filePath = file.path.replace('.html', '');
          const fileName = file.path.replace('.html', '').replace(/-/g, ' ').replace('studies/study5env/analysis/', '');
          htmlString += `<li><a href="https://bradkennedy-phd.github.io/${filePath}" target="_blank" rel="noopener noreferrer">View analysis script as webpage (HTML) [${fileName}] </a><i class="fas fa-external-link-alt"></i></li>`;
        }
      htmlString += '</ul>';
        document.getElementById('html_list').innerHTML = htmlString;
      }
      
      (async () => {
        const response = await fetch('https://api.github.com/repos/BradKennedy-PhD/bradkennedy-phd.github.io/contents/studies/study5env/analysis');
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
          const fileName = file.path.replace(/-/g, ' ').replace('studies/study5env/analysis/', '');
          const isRMD = (/.Rmd$/).test(filePath);
          return isRMD;
        }
      }
      
      const renderList2 = (data, filter = '') => {
        let htmlString = '<ul>';
        for (let file of data.filter(filterFiles2(filter))) {
          const filePath = file.path;
          const fileName = file.path.replace('.Rmd', '').replace(/-/g, ' ').replace('studies/study5env/analysis/', '');
          htmlString += `<li><a href="https://bradkennedy-phd.github.io/${filePath}" target="_blank" rel="noopener noreferrer">DOWNLOAD analysis script as R Markdown file [${fileName}] </a><i class="fas fa-external-link-alt"></i></li>`;
        }
      htmlString += '</ul>';
        document.getElementById('rmd_list').innerHTML = htmlString;
      }
      
      (async () => {
        const response = await fetch('https://api.github.com/repos/BradKennedy-PhD/bradkennedy-phd.github.io/contents/studies/study5env/analysis');
        const data = await response.json();
        renderList2(data);
      })()
    </script>
</html>