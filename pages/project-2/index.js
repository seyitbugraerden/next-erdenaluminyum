import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';


const ProjectPage2 =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle={'Projects'} pagesub={'Project'}/> 
            <ProjectSectionS2 prClass={'section-padding'}/>

            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage2;
