---
layout: page
title: Replication
hide_hero: true
hide_footer: true
show_sidebar: false
menubar: main_menu
---
# Knobe (2003) Replication

***

## Description
B Kennedy's PhD project is based on this initial publication by Joshua Knobe, 2003, an American philosopher. Knobe theorised a side-effect effect (SEE) which can be described as viewing ‘side-effect’ actions as more intentional if they were viewed as harmful, and less intentional if they were helpful.

In the original study, the researcher approached a total sample of 120 in a public park in America. He read a small vignette whereby a character performed an action which had another consequential action (a side-effect). The researcher then asked the sample to rate how much praise the character deserved for the helpful condition or how much blame they deserved for the harm condition. Additionally, the sample were asked to say if the side effect was intentional or not. It was found that people gave less praise for the help condition and more blame the harm condition. Additionally, they rated the harmful side effects as more intentional than the helpful one.

The original research was conducted in America in 2003. It is hoped that the findings can be replicated with a UK sample in 2018. In addition, it is hoped that administering the study electronically will produce the same outcome. By replicating the findings here, we would be able to support the SEE theory and build a sample of participants who may agree to being contacted for future (PhD) SEE-related studies.

It is predicted that we would replicate the results of Knobe (2003), in that, participants would rate the harmful condition as significantly more intentional and the helpful condition as significantly less intentional.

Reference Knobe, J. (2003). Ordinary Language. Analysis, 63(279), 190–194.

## Open Science Framework
<a href="https://osf.io/8h9aw/" target="_blank" rel="noopener noreferrer">View OSF Project Page <i class="fas fa-external-link-alt"></i></a>

<a href="https://osf.io/xhfe9/" class="button is-primary" target="_blank" rel="noopener noreferrer">View Materials <i class="fas fa-external-link-alt"></i></a>

<a href="https://osf.io/9uy3m/" class="button is-primary" target="_blank" rel="noopener noreferrer">View Data <i class="fas fa-external-link-alt"></i></a>

<a href="https://osf.io/g2d7p/" class="button is-primary" target="_blank" rel="noopener noreferrer">View Analysis <i class="fas fa-external-link-alt"></i></a>

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
          const fileName = file.path.replace('.html', '').replace(/-/g, ' ').replace('studies/replication/analysis/', '');
          const isHTML = (/.html$/).test(filePath);
          return isHTML;
        }
      }
      
      const renderList1 = (data, filter = '') => {
        let htmlString = '<ul>';
        for (let file of data.filter(filterFiles1(filter))) {
          const filePath = file.path.replace('.html', '');
          const fileName = file.path.replace('.html', '').replace(/-/g, ' ').replace('studies/replication/analysis/', '');
          htmlString += `<li><a href="https://bradkennedy-phd.github.io/${filePath}" target="_blank" rel="noopener noreferrer">View analysis script as webpage (HTML) [${fileName}] </a><i class="fas fa-external-link-alt"></i></li>`;
        }
      htmlString += '</ul>';
        document.getElementById('html_list').innerHTML = htmlString;
      }
      
      (async () => {
        const response = await fetch('https://api.github.com/repos/BradKennedy-PhD/bradkennedy-phd.github.io/contents/studies/replication/analysis');
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
          const fileName = file.path.replace(/-/g, ' ').replace('studies/replication/analysis/', '');
          const isRMD = (/.Rmd$/).test(filePath);
          return isRMD;
        }
      }
      
      const renderList2 = (data, filter = '') => {
        let htmlString = '<ul>';
        for (let file of data.filter(filterFiles2(filter))) {
          const filePath = file.path;
          const fileName = file.path.replace('.Rmd', '').replace(/-/g, ' ').replace('studies/replication/analysis/', '');
          htmlString += `<li><a href="https://bradkennedy-phd.github.io/${filePath}" target="_blank" rel="noopener noreferrer">DOWNLOAD analysis script as R Markdown file [${fileName}] </a><i class="fas fa-external-link-alt"></i></li>`;
        }
      htmlString += '</ul>';
        document.getElementById('rmd_list').innerHTML = htmlString;
      }
      
      (async () => {
        const response = await fetch('https://api.github.com/repos/BradKennedy-PhD/bradkennedy-phd.github.io/contents/studies/replication/analysis');
        const data = await response.json();
        renderList2(data);
      })()
    </script>
</html>