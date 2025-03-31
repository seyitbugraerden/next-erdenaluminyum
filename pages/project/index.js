import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ProjectSection from '../../components/ProjectSection/ProjectSection';


const ProjectPage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle={'Projects'} pagesub={'Project'}/> 
            <ProjectSection/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage;
