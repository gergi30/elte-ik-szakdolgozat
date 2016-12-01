// Llamado de /client/main.js
import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// Layouts
import MainLayout from '/imports/ui/layouts/MainLayout';

// Pages
import Index from '/imports/ui/pages/Index';
import NotFound from '/imports/ui/pages/NotFound';

FlowRouter.route('/', {
	name: 'index',
	action() {
		mount(MainLayout, {
			main: <Index />
		});
	}
});

FlowRouter.notFound = {
		name: 'notfound',
      action() {
			mount(MainLayout, {
				main: <NotFound />
			});
    }
};
