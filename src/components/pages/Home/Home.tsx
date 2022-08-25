import React from 'react';

const Home = () => {
    return (
        <div>
            <p style={{color: 'red',fontWeight: '800'}}>Tasks</p>
            Using a third party API as a data source (example: Star Wars API https://swapi.dev/),<br/>
            implement a SPA application (React or Vue) consisting of two pages.<br/>
            On the main page, display a list or cards of characters, add the possibility of pagination to the list.<br/>
            Implement a page with detailed information on the selected character.<br/>
            <br/>
            Pros:<br/>
            + Using TypeScript<br/>
            + Neat layout<br/>
            + Using UI framework (Material, Ant, Bootstrap, etc.)<br/>

            As an extra challenge:<br/>
            + To work with data, use storage (Vuex, Redux, etc.)<br/>
            + Subscribe to update the storage status<br/>
            + Add character search field by API (or local filter)<br/>
            Our considerations for evaluation:<br/>
            - When evaluating the task, take into account, in general, the functional approach and data immutability in
            the frontend (filter, map, reduce)<br/>
            - Take into account how accurately the re-render will work when editing (so as not to re-render the entire
            data array and not to sag in performance)<br/>
            - If React is chosen, the actual approach is to use hooks.<br/>
<br/>
<br/>
                git repo: <a href="https://github.com/evgeny3322/faraway-test">https://github.com/evgeny3322/faraway-test</a>
<br/>
                telegram: <a href="#">@evgenuvld</a>
        </div>
    );
};

export default Home;