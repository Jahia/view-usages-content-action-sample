import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import {useNodeChecks} from '@jahia/data-helper';
import {useSelector} from 'react-redux';

export const ViewUsagesActionComponent = ({path, render: Render, loading: Loading, ...otherProps})  => {
    const {language} = useSelector(state => ({language: state.language, site: state.site, uilang: state.uilang}));
    const res = useNodeChecks(
        {path: path, language: language},
        {...otherProps}
    );

    // Load namespace
    useTranslation('view-usages-content-action-sample');

    return (
        <Render
            {...otherProps}
            isVisible={res.checksResult}
            onClick={() => {
                window.parent.authoringApi.editContent(path, res.node.name, ['jnt:file'],[], res.node.uuid, false, {hideWip:true, displayedTabs: ["usages"], hideHeaders:true})
            }}
        />
    );
};


ViewUsagesActionComponent.defaultProps = {
    loading: undefined,
};

ViewUsagesActionComponent.propTypes = {
    path: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
    loading: PropTypes.func
};
