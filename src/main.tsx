import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import JobListingProvider from './context/JobListingContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<JobListingProvider>
			<App />
		</JobListingProvider>
	</React.StrictMode>,
);