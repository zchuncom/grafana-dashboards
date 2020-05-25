import React, { useState } from 'react';
import { Agents, NodesTab, Services } from './Tabs';
import { TabsBar, TabContent, Tab } from '@grafana/ui';

export const InventoryPanel = () => {
  const [activeTab, setActiveTab] = useState('services');
  const tabs = [
    { label: 'Services', key: 'services', active: activeTab === 'services' },
    { label: 'Agents', key: 'agents', active: activeTab === 'agents' },
    { label: 'Nodes', key: 'nodes', active: activeTab === 'nodes' },
  ];

  return (
    <div id="inventory-wrapper">
      <TabsBar>
        {tabs.map((tab, index) => {
          return (
            <Tab
              key={index}
              label={tab.label}
              active={tab.active}
              onChangeTab={() => {
                setActiveTab(tab.key);
              }}
            />
          );
        })}
      </TabsBar>
      <TabContent>
        {tabs[0].active && <Services />}
        {tabs[1].active && <Agents />}
        {tabs[2].active && <NodesTab />}
      </TabContent>
    </div>
  );
};
