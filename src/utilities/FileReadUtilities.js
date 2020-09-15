

export const process = (arr) => {

    const res = {};
    const errors = [];
    const warnings = [];
    const problem = {};
    const solution = {};
    const keyMetrics = {};
    const uniqueValueProposition = {};
    const unfairAdvantage = {};
    const channels = {};
    const customerSegments = {};
    const costStructure = {};
    const revenueStreams = {};

    if (arr.length > 0 && arr[0].type === 'heading' && arr[0].raw && arr[0].raw.startsWith('# '))
        res.heading = arr[0].text;
    else {
        warnings.push(`h1/Main heading for lean canvas not found`);
    }

    function fetchProblemData() {
        let tmp = arr.findIndex(obj => {
            return obj.type === 'heading' && obj.text.toLowerCase().includes('problem');
        })
        if (tmp === -1) {
            errors.push(`h2/Problem heading for lean canvas not found`);
        }
        else {
            if (tmp + 1 < arr.length && arr[tmp + 1].type !== 'list') {
                warnings.push('No content found for problem');
            }
            else {
                problem.list = arr[tmp + 1].items.filter(listItem => !listItem.text.toLowerCase().includes('existing alternative')).map(elem => elem.text);

                let altElems = arr[tmp + 1].items.filter(listItem => listItem.text.toLowerCase().includes('existing alternative'));
                if (altElems.length !== 0 && altElems[0].tokens && altElems[0].tokens.length > 1) {
                    if (altElems[0].tokens[1].items && altElems[0].tokens[1].items.length > 0)
                        problem.existingAlternatives = altElems[0].tokens[1].items.map(e => e.text);
                    else
                        warnings.push('No list existing alternatives found.')

                }
                else {
                    warnings.push('No existing alternatives mentioned');
                }
            }
        }
    }

    function fetchSolutionData() {
        let tmp = arr.findIndex(obj => {
            return obj.type === 'heading' && obj.text.toLowerCase().includes('solution');
        })
        if (tmp === -1) {
            errors.push('h2/Solution heading for lean canvas not found');
        }
        else {
            if (tmp + 1 < arr.length && arr[tmp + 1].type !== 'list') {
                warnings.push('No content found for solution');
            }
            else {
                solution.list = arr[tmp + 1].items.map(elem => elem.text);
            }
        }
    }

    function fetchKeyMetricsData() {
        let tmp = arr.findIndex(obj => {
            return obj.type === 'heading' && obj.text.toLowerCase().includes('key metric');
        })
        if (tmp === -1) {
            errors.push('h2/Key Metrics heading for lean canvas not found');
        }
        else {
            if (tmp + 1 < arr.length && arr[tmp + 1].type !== 'list') {
                warnings.push('No content found for Key Metrics');
            }
            else {
                keyMetrics.list = arr[tmp + 1].items.map(elem => elem.text);
            }
        }
    }
    function fetchUniqueValuePropositionData() {
        let tmp = arr.findIndex(obj => {
            return obj.type === 'heading' && obj.text.toLowerCase().includes('unique value proposition');
        })
        if (tmp === -1) {
            errors.push('h2/Unique Value Proposition heading for lean canvas not found');
        }
        else {
            if (tmp + 1 < arr.length && arr[tmp + 1].type !== 'list') {
                warnings.push('No content found for unique value proposition');
            }
            else {
                uniqueValueProposition.list = arr[tmp + 1].items.filter(listItem => !listItem.text.toLowerCase().includes('high level concept')).map(elem => elem.text);

                let altElems = arr[tmp + 1].items.filter(listItem => listItem.text.toLowerCase().includes('high level concept'));
                if (altElems.length !== 0 && altElems[0].tokens && altElems[0].tokens.length > 1) {
                    uniqueValueProposition.highLevelConcept = altElems[0].tokens[1].items.map(e => e.text);

                }
                else {
                    warnings.push('No key concept mentioned');
                }
            }
        }
    }
    function fetchUnfairAdvantageData() {
        let tmp = arr.findIndex(obj => {
            return obj.type === 'heading' && obj.text.toLowerCase().includes('unfair advantage');
        })
        if (tmp === -1) {
            errors.push('h2/Unfair Advantage heading for lean canvas not found');
        }
        else {
            if (tmp + 1 < arr.length && arr[tmp + 1].type !== 'list') {
                warnings.push('No content found for Unfair Advantage');
            }
            else {
                unfairAdvantage.list = arr[tmp + 1].items.map(elem => elem.text);
            }
        }
    }

    function fetchChannelsData() {
        let tmp = arr.findIndex(obj => {
            return obj.type === 'heading' && obj.text.toLowerCase().includes('channel');
        })
        if (tmp === -1) {
            errors.push('h2/Channels heading for lean canvas not found');
        }
        else {
            if (tmp + 1 < arr.length && arr[tmp + 1].type !== 'list') {
                warnings.push('No content found for Channels');
            }
            else {
                channels.list = arr[tmp + 1].items.map(elem => elem.text);
            }
        }
    }

    function fetchCustomerSegmentsData() {
        let tmp = arr.findIndex(obj => {
            return obj.type === 'heading' && obj.text.toLowerCase().includes('customer segment');
        })
        if (tmp === -1) {
            errors.push('h2/Customer segments heading for lean canvas not found');
        }
        else {
            if (tmp + 1 < arr.length && arr[tmp + 1].type !== 'list') {
                warnings.push('No content found for Customer segments');
            }
            else {
                customerSegments.list = arr[tmp + 1].items.filter(listItem => !listItem.text.toLowerCase().includes('early adopter')).map(elem => elem.text);

                let altElems = arr[tmp + 1].items.filter(listItem => listItem.text.toLowerCase().includes('early adopter'));
                if (altElems.length !== 0 && altElems[0].tokens && altElems[0].tokens.length > 1) {
                    customerSegments.earlyAdopters = altElems[0].tokens[1].items.map(e => e.text);

                }
                else {
                    warnings.push('No Early adopters mentioned');
                }
            }
        }
    }
    function fetchCostStructureData() {
        let tmp = arr.findIndex(obj => {
            return obj.type === 'heading' && obj.text.toLowerCase().includes('cost structure');
        })
        if (tmp === -1) {
            errors.push('h2/Cost structure heading for lean canvas not found');
        }
        else {
            if (tmp + 1 < arr.length && arr[tmp + 1].type !== 'list') {
                warnings.push('No content found for Cost structure');
            }
            else {
                costStructure.list = arr[tmp + 1].items.map(elem => elem.text);
            }
        }
    }
    function fetchRevenueStreamsData() {
        let tmp = arr.findIndex(obj => {
            return obj.type === 'heading' && obj.text.toLowerCase().includes('revenue stream');
        })
        if (tmp === -1) {
            errors.push('h2/Revenue streams heading for lean canvas not found');
        }
        else {
            if (tmp + 1 < arr.length && arr[tmp + 1].type !== 'list') {
                warnings.push('No content found for Revenue streams');
            }
            else {
                revenueStreams.list = arr[tmp + 1].items.map(elem => elem.text);
            }
        }
    }
    fetchProblemData();
    fetchSolutionData();
    fetchKeyMetricsData();
    fetchUniqueValuePropositionData();
    fetchUnfairAdvantageData();
    fetchChannelsData();
    fetchCustomerSegmentsData();
    fetchCostStructureData();
    fetchRevenueStreamsData();

    res.warnings = warnings;
    res.errors = errors;
    res.problem = problem;
    res.solution = solution;
    res.keyMetrics = keyMetrics;
    res.uniqueValueProposition = uniqueValueProposition;
    res.unfairAdvantage = unfairAdvantage;
    res.channels = channels;
    res.customerSegments = customerSegments;
    res.costStructure = costStructure;
    res.revenueStreams = revenueStreams;
    return res;
}