import {registry} from '@jahia/ui-extender';
import register from './ViewUsagesContentAction/register';

export default function () {
    registry.add('callback', 'viewUsagesContentAction', {
        targets: ['jahiaApp-init:51'],
        callback: register
    });
}
