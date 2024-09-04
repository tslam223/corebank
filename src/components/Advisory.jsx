import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";

const Advisory = () => {
  return (
    <section className="bg-yello text-white">
      <div className="container">
        <Tabs colorScheme="white" variant="unstyled">
          <TabList >
            <Tab>Banking Advisory</Tab>
            <Tab>Target Market</Tab>
            <Tab>Goals & plans</Tab>
            <Tab>Corethrift</Tab>
            <Tab>Core Loan</Tab>
            <Tab>Success story</Tab>
          </TabList>

          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="white"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <div>
                <h2>Banking Advisory</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
                <button>Learn more</button>
              </div>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </section>
  );
};

export default Advisory;
