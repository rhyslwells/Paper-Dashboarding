// ExampleComponent.tsx
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';

const ExampleComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-8">
      {/* Tabs Component */}
      <Tabs>
        <TabsList>
          <TabsTrigger isActive={activeTab === 0} onClick={() => setActiveTab(0)}>
            Tab 1
          </TabsTrigger>
          <TabsTrigger isActive={activeTab === 1} onClick={() => setActiveTab(1)}>
            Tab 2
          </TabsTrigger>
        </TabsList>
        <TabsContent isActive={activeTab === 0}>
          <p>This is the content of Tab 1</p>
        </TabsContent>
        <TabsContent isActive={activeTab === 1}>
          <p>This is the content of Tab 2</p>
        </TabsContent>
      </Tabs>

      {/* Card Component */}
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the content of the card.</p>
        </CardContent>
        <CardFooter>
          <button className="btn btn-primary">Action</button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ExampleComponent;
