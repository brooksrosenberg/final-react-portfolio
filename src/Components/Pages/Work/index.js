import './works.css'
import React from 'react';
import WorkCard from '../../Sections/WorkCard';
import { Card, CardBody, CardTitle } from 'reactstrap';
import works from '../../Information/works'
import { Link } from 'react-router-dom';

class Works extends React.Component {
    state = { works };
    
    render () {
        return (
            <Card>
                <CardTitle className='main-title'>
                  Works
                </CardTitle>
                <p className='works-desc'>Here is a collection of some of my works. To view the projects below click on the deployed link, or click on the Github button to view the code base. To see more of my works visit my Github from the <Link to="/contact">Contact</Link> page.</p>
                <CardBody className='work-card'>
                    {this.state.works.map(work => (
                        <WorkCard
                            name={work.name}
                            photo={work.photo}
                            info={work.info}
                            tech={work.tech}
                            deployedLink={work.deployedLink}
                            githubLink={work.githubLink}
                        />
                    ))}
              </CardBody>
            </Card>
        )
    }
}

export default Works;