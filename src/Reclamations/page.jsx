import React, { useState, useEffect } from 'react';import Header from '../pages/header';
import Mail from './components/Mail';
import { accounts, mails } from "./data";

function Reclamations() {
    const [defaultLayout, setDefaultLayout] = useState(undefined);
  const [defaultCollapsed, setDefaultCollapsed] = useState(undefined);

  useEffect(() => {
    // Simulating cookie retrieval using setTimeout
    const timeout = setTimeout(() => {
      const layout = localStorage.getItem('react-resizable-panels:layout');
      const collapsed = localStorage.getItem('react-resizable-panels:collapsed');
      if (layout) setDefaultLayout(JSON.parse(layout));
      if (collapsed) setDefaultCollapsed(JSON.parse(collapsed));
    }, 1000); // Adjust timeout as needed
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures this effect runs only once on mount


    return (
        <>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Reclamations</h2>
                    {/* <div className="flex items-center space-x-2">
                        <Button>Download</Button>
                    </div> */}
                </div>
            </div>

            <div className="md:hidden">
                {/* Image */}
            </div>

            <div className="hidden flex-col md:flex">
                <Mail
                accounts={accounts}
                mails={mails}
                defaultLayout={defaultLayout}
                defaultCollapsed={defaultCollapsed}
                navCollapsedSize={4}
                />
            </div>

        </>
    );
}

export default Reclamations;
