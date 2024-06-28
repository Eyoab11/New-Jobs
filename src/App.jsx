import React from 'react';
import HomePage from './pages/HomePage';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobsPage from './pages/AddJobsPage';
import EditJobpage from './pages/EditJobpage';


const App = () => {
const addJob = async (newJob) => { 
  const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'

    },

    body: JSON.stringify(newJob),
  });
  return;
};


// Delete Job
const deleteJob = async (id) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE', 
  });
  return;


};

// update job

const updateJob = async (job) => {
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'

    },

    body: JSON.stringify(job),
  });
  return;
};



const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
  
  <Route index element={ <HomePage /> } />
  <Route path='/jobs' element={<JobsPage />} />
  <Route path='*' element={<NotFoundPage /> } />
  <Route path= '/jobs/:id' element={<JobPage deleteJob={ deleteJob }/> }  loader= {jobLoader}/>
  <Route path= '/add-job' element={ <AddJobsPage addJobSubmit={addJob}/>} />
  <Route path= '/edit-job/:id' element= {<EditJobpage updateJobSubmit={updateJob} /> } loader= {jobLoader} />
  </Route>
  )

)

  return <RouterProvider router={router} />;
}

export default App