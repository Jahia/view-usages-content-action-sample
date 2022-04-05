import React from 'react';
import {registry} from '@jahia/ui-extender';
import {Visibility} from '@jahia/moonstone';
import {ViewUsagesActionComponent} from "./ViewUsagesActionComponent";

export default () => {
    registry.add('action', 'viewUsagesContentAction', {
        buttonIcon: <Visibility/>,
        buttonLabel: 'view-usages-content-action-sample:label.action',
        showOnNodeTypes: ['jnt:file'],
        targets: ['contentActions:0'],
        component: ViewUsagesActionComponent
    });
};
