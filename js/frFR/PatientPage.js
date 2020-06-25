
// POST //

async function postPatientMedicale($formulaireValeurs, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			ajouterLueur($formulaireValeurs.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			ajouterErreur($formulaireValeurs.next('button'));
		};
	}

	var valeurPatientPrenom = $formulaireValeurs.find('.valeurPatientPrenom').val();
	if(valeurPatientPrenom != null && valeurPatientPrenom !== '')
		vals['patientPrenom'] = valeurPatientPrenom;

	var valeurFamilleNom = $formulaireValeurs.find('.valeurFamilleNom').val();
	if(valeurFamilleNom != null && valeurFamilleNom !== '')
		vals['familleNom'] = valeurFamilleNom;

	var valeurPatientPrenomPrefere = $formulaireValeurs.find('.valeurPatientPrenomPrefere').val();
	if(valeurPatientPrenomPrefere != null && valeurPatientPrenomPrefere !== '')
		vals['patientPrenomPrefere'] = valeurPatientPrenomPrefere;

	var valeurPatientDateNaissance = $formulaireValeurs.find('.valeurPatientDateNaissance').val();
	if(valeurPatientDateNaissance != null && valeurPatientDateNaissance !== '')
		vals['patientDateNaissance'] = valeurPatientDateNaissance;

	var valeurInscriptionCles = [];
	$formulaireValeurs.find('input.valeurInscriptionCles:checked').each(function(index) {
		valeurInscriptionCles.push($(this).val());
	});
	if(valeurInscriptionCles.length > 0)
		vals['inscriptionCles'] = valeurInscriptionCles;

	$.ajax({
		url: '/api/patient'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postPatientMedicaleVals(vals, success, error) {
	$.ajax({
		url: '/api/patient'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportPatientMedicale($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportPatientMedicaleVals(JSON.parse(json), success, error);
}

function putimportPatientMedicaleVals(json, success, error) {
	$.ajax({
		url: '/api/patient/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionPatientMedicale($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionPatientMedicaleVals(JSON.parse(json), success, error);
}

function putfusionPatientMedicaleVals(json, success, error) {
	$.ajax({
		url: '/api/patient/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopiePatientMedicale($formulaireValeurs, pk, success, error) {
	var vals = {};

	var valeurPatientPrenom = $formulaireValeurs.find('.valeurPatientPrenom').val();
	if(valeurPatientPrenom != null && valeurPatientPrenom !== '')
		vals['patientPrenom'] = valeurPatientPrenom;

	var valeurFamilleNom = $formulaireValeurs.find('.valeurFamilleNom').val();
	if(valeurFamilleNom != null && valeurFamilleNom !== '')
		vals['familleNom'] = valeurFamilleNom;

	var valeurPatientPrenomPrefere = $formulaireValeurs.find('.valeurPatientPrenomPrefere').val();
	if(valeurPatientPrenomPrefere != null && valeurPatientPrenomPrefere !== '')
		vals['patientPrenomPrefere'] = valeurPatientPrenomPrefere;

	var valeurPatientDateNaissance = $formulaireValeurs.find('.valeurPatientDateNaissance').val();
	if(valeurPatientDateNaissance != null && valeurPatientDateNaissance !== '')
		vals['patientDateNaissance'] = valeurPatientDateNaissance;

	var valeurInscriptionCles = $formulaireValeurs.find('input.valeurInscriptionCles:checked').val();
	if(valeurInscriptionCles != null && valeurInscriptionCles !== '')
		vals['inscriptionCles'] = [valeurInscriptionCles];

	putcopiePatientMedicaleVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopiePatientMedicaleVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/patient/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchPatientMedicale($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchPatientMedicaleFiltres($formulaireFiltres);

	var vals = {};

	var valeurPatientPrenom = $formulaireValeurs.find('.valeurPatientPrenom').val();
	if(valeurPatientPrenom != null && valeurPatientPrenom !== '')
	var removePatientPrenom = $formulaireFiltres.find('.removePatientPrenom').val() === 'true';
	var setPatientPrenom = removePatientPrenom ? null : $formulaireValeurs.find('.setPatientPrenom').val();
	if(removePatientPrenom || setPatientPrenom != null && setPatientPrenom !== '')
		vals['setPatientPrenom'] = setPatientPrenom;
	var addPatientPrenom = $formulaireValeurs.find('.addPatientPrenom').val();
	if(addPatientPrenom != null && addPatientPrenom !== '')
		vals['addPatientPrenom'] = addPatientPrenom;
	var removePatientPrenom = $formulaireValeurs.find('.removePatientPrenom').val();
	if(removePatientPrenom != null && removePatientPrenom !== '')
		vals['removePatientPrenom'] = removePatientPrenom;

	var valeurFamilleNom = $formulaireValeurs.find('.valeurFamilleNom').val();
	if(valeurFamilleNom != null && valeurFamilleNom !== '')
	var removeFamilleNom = $formulaireFiltres.find('.removeFamilleNom').val() === 'true';
	var setFamilleNom = removeFamilleNom ? null : $formulaireValeurs.find('.setFamilleNom').val();
	if(removeFamilleNom || setFamilleNom != null && setFamilleNom !== '')
		vals['setFamilleNom'] = setFamilleNom;
	var addFamilleNom = $formulaireValeurs.find('.addFamilleNom').val();
	if(addFamilleNom != null && addFamilleNom !== '')
		vals['addFamilleNom'] = addFamilleNom;
	var removeFamilleNom = $formulaireValeurs.find('.removeFamilleNom').val();
	if(removeFamilleNom != null && removeFamilleNom !== '')
		vals['removeFamilleNom'] = removeFamilleNom;

	var valeurPatientPrenomPrefere = $formulaireValeurs.find('.valeurPatientPrenomPrefere').val();
	if(valeurPatientPrenomPrefere != null && valeurPatientPrenomPrefere !== '')
	var removePatientPrenomPrefere = $formulaireFiltres.find('.removePatientPrenomPrefere').val() === 'true';
	var setPatientPrenomPrefere = removePatientPrenomPrefere ? null : $formulaireValeurs.find('.setPatientPrenomPrefere').val();
	if(removePatientPrenomPrefere || setPatientPrenomPrefere != null && setPatientPrenomPrefere !== '')
		vals['setPatientPrenomPrefere'] = setPatientPrenomPrefere;
	var addPatientPrenomPrefere = $formulaireValeurs.find('.addPatientPrenomPrefere').val();
	if(addPatientPrenomPrefere != null && addPatientPrenomPrefere !== '')
		vals['addPatientPrenomPrefere'] = addPatientPrenomPrefere;
	var removePatientPrenomPrefere = $formulaireValeurs.find('.removePatientPrenomPrefere').val();
	if(removePatientPrenomPrefere != null && removePatientPrenomPrefere !== '')
		vals['removePatientPrenomPrefere'] = removePatientPrenomPrefere;

	var valeurPatientDateNaissance = $formulaireValeurs.find('.valeurPatientDateNaissance').val();
	if(valeurPatientDateNaissance != null && valeurPatientDateNaissance !== '')
	var removePatientDateNaissance = $formulaireFiltres.find('.removePatientDateNaissance').val() === 'true';
	var setPatientDateNaissance = removePatientDateNaissance ? null : $formulaireValeurs.find('.setPatientDateNaissance').val();
	if(removePatientDateNaissance || setPatientDateNaissance != null && setPatientDateNaissance !== '')
		vals['setPatientDateNaissance'] = setPatientDateNaissance;
	var addPatientDateNaissance = $formulaireValeurs.find('.addPatientDateNaissance').val();
	if(addPatientDateNaissance != null && addPatientDateNaissance !== '')
		vals['addPatientDateNaissance'] = addPatientDateNaissance;
	var removePatientDateNaissance = $formulaireValeurs.find('.removePatientDateNaissance').val();
	if(removePatientDateNaissance != null && removePatientDateNaissance !== '')
		vals['removePatientDateNaissance'] = removePatientDateNaissance;

	var valeurInscriptionCles = $formulaireValeurs.find('input.valeurInscriptionCles:checked').val();
	if(valeurInscriptionCles != null && valeurInscriptionCles !== '')
		vals['addInscriptionCles'] = valeurInscriptionCles;

	patchPatientMedicaleVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchPatientMedicaleFiltres($formulaireFiltres) {
	var filtres = [];
	if($formulaireFiltres) {

		var filtrePatientPrenom = $formulaireFiltres.find('.valeurPatientPrenom').val();
		if(filtrePatientPrenom != null && filtrePatientPrenom !== '')
			filtres.push({ name: 'fq', value: 'patientPrenom:' + filtrePatientPrenom });

		var filtreFamilleNom = $formulaireFiltres.find('.valeurFamilleNom').val();
		if(filtreFamilleNom != null && filtreFamilleNom !== '')
			filtres.push({ name: 'fq', value: 'familleNom:' + filtreFamilleNom });

		var filtrePatientPrenomPrefere = $formulaireFiltres.find('.valeurPatientPrenomPrefere').val();
		if(filtrePatientPrenomPrefere != null && filtrePatientPrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientPrenomPrefere:' + filtrePatientPrenomPrefere });

		var filtrePatientDateNaissance = $formulaireFiltres.find('.valeurPatientDateNaissance').val();
		if(filtrePatientDateNaissance != null && filtrePatientDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissance:' + filtrePatientDateNaissance });

		var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
		if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

		var filtrePatientCle = $formulaireFiltres.find('.valeurPatientCle').val();
		if(filtrePatientCle != null && filtrePatientCle !== '')
			filtres.push({ name: 'fq', value: 'patientCle:' + filtrePatientCle });

		var filtrePatientTri = $formulaireFiltres.find('.valeurPatientTri').val();
		if(filtrePatientTri != null && filtrePatientTri !== '')
			filtres.push({ name: 'fq', value: 'patientTri:' + filtrePatientTri });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreCliniqueCles = $formulaireFiltres.find('.valeurCliniqueCles').val();
		if(filtreCliniqueCles != null && filtreCliniqueCles !== '')
			filtres.push({ name: 'fq', value: 'cliniqueCles:' + filtreCliniqueCles });

		var filtrePatientNomComplet = $formulaireFiltres.find('.valeurPatientNomComplet').val();
		if(filtrePatientNomComplet != null && filtrePatientNomComplet !== '')
			filtres.push({ name: 'fq', value: 'patientNomComplet:' + filtrePatientNomComplet });

		var filtrePatientNomCompletPrefere = $formulaireFiltres.find('.valeurPatientNomCompletPrefere').val();
		if(filtrePatientNomCompletPrefere != null && filtrePatientNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientNomCompletPrefere:' + filtrePatientNomCompletPrefere });

		var filtrePatientNomFormel = $formulaireFiltres.find('.valeurPatientNomFormel').val();
		if(filtrePatientNomFormel != null && filtrePatientNomFormel !== '')
			filtres.push({ name: 'fq', value: 'patientNomFormel:' + filtrePatientNomFormel });

		var filtrePatientDateNaissanceDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceDAnnee').val();
		if(filtrePatientDateNaissanceDAnnee != null && filtrePatientDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceDAnnee:' + filtrePatientDateNaissanceDAnnee });

		var filtrePatientDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceMoisDAnnee').val();
		if(filtrePatientDateNaissanceMoisDAnnee != null && filtrePatientDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceMoisDAnnee:' + filtrePatientDateNaissanceMoisDAnnee });

		var filtrePatientDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurPatientDateNaissanceJourDeSemaine').val();
		if(filtrePatientDateNaissanceJourDeSemaine != null && filtrePatientDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceJourDeSemaine:' + filtrePatientDateNaissanceJourDeSemaine });
	}
	return filtres;
}

function patchPatientMedicaleVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchPatientMedicaleVals(filtres, vals, success, error);
}

function patchPatientMedicaleVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/patient?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getPatientMedicale(pk) {
	$.ajax({
		url: '/api/patient/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Recherche //

async function recherchePatientMedicale($formulaireFiltres, success, error) {
	var filtres = recherchePatientMedicaleFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	recherchePatientMedicaleVals(filtres, success, error);
}

function recherchePatientMedicaleFiltres($formulaireFiltres) {
	var filtres = [];
	if($formulaireFiltres) {

		var filtrePatientPrenom = $formulaireFiltres.find('.valeurPatientPrenom').val();
		if(filtrePatientPrenom != null && filtrePatientPrenom !== '')
			filtres.push({ name: 'fq', value: 'patientPrenom:' + filtrePatientPrenom });

		var filtreFamilleNom = $formulaireFiltres.find('.valeurFamilleNom').val();
		if(filtreFamilleNom != null && filtreFamilleNom !== '')
			filtres.push({ name: 'fq', value: 'familleNom:' + filtreFamilleNom });

		var filtrePatientPrenomPrefere = $formulaireFiltres.find('.valeurPatientPrenomPrefere').val();
		if(filtrePatientPrenomPrefere != null && filtrePatientPrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientPrenomPrefere:' + filtrePatientPrenomPrefere });

		var filtrePatientDateNaissance = $formulaireFiltres.find('.valeurPatientDateNaissance').val();
		if(filtrePatientDateNaissance != null && filtrePatientDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissance:' + filtrePatientDateNaissance });

		var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
		if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

		var filtrePatientCle = $formulaireFiltres.find('.valeurPatientCle').val();
		if(filtrePatientCle != null && filtrePatientCle !== '')
			filtres.push({ name: 'fq', value: 'patientCle:' + filtrePatientCle });

		var filtrePatientTri = $formulaireFiltres.find('.valeurPatientTri').val();
		if(filtrePatientTri != null && filtrePatientTri !== '')
			filtres.push({ name: 'fq', value: 'patientTri:' + filtrePatientTri });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreCliniqueCles = $formulaireFiltres.find('.valeurCliniqueCles').val();
		if(filtreCliniqueCles != null && filtreCliniqueCles !== '')
			filtres.push({ name: 'fq', value: 'cliniqueCles:' + filtreCliniqueCles });

		var filtrePatientNomComplet = $formulaireFiltres.find('.valeurPatientNomComplet').val();
		if(filtrePatientNomComplet != null && filtrePatientNomComplet !== '')
			filtres.push({ name: 'fq', value: 'patientNomComplet:' + filtrePatientNomComplet });

		var filtrePatientNomCompletPrefere = $formulaireFiltres.find('.valeurPatientNomCompletPrefere').val();
		if(filtrePatientNomCompletPrefere != null && filtrePatientNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientNomCompletPrefere:' + filtrePatientNomCompletPrefere });

		var filtrePatientNomFormel = $formulaireFiltres.find('.valeurPatientNomFormel').val();
		if(filtrePatientNomFormel != null && filtrePatientNomFormel !== '')
			filtres.push({ name: 'fq', value: 'patientNomFormel:' + filtrePatientNomFormel });

		var filtrePatientDateNaissanceDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceDAnnee').val();
		if(filtrePatientDateNaissanceDAnnee != null && filtrePatientDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceDAnnee:' + filtrePatientDateNaissanceDAnnee });

		var filtrePatientDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceMoisDAnnee').val();
		if(filtrePatientDateNaissanceMoisDAnnee != null && filtrePatientDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceMoisDAnnee:' + filtrePatientDateNaissanceMoisDAnnee });

		var filtrePatientDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurPatientDateNaissanceJourDeSemaine').val();
		if(filtrePatientDateNaissanceJourDeSemaine != null && filtrePatientDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceJourDeSemaine:' + filtrePatientDateNaissanceJourDeSemaine });
	}
	return filtres;
}

function recherchePatientMedicaleVals(filtres, success, error) {
	$.ajax({
		url: '/api/patient?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggerePatientMedicaleInscriptionCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-notes-medical ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['patientCle'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_patientCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurInscriptionCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_patientCle_" + o['pk'] + "'); patchPatientMedicaleVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'enleverLueur($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribuer)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#PatientMedicaleForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionMedicaleVals(filtres, success, error);
}

// RechercheAdmin //

async function rechercheadminPatientMedicale($formulaireFiltres, success, error) {
	var filtres = rechercheadminPatientMedicaleFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheadminPatientMedicaleVals(filtres, success, error);
}

function rechercheadminPatientMedicaleFiltres($formulaireFiltres) {
	var filtres = [];
	if($formulaireFiltres) {

		var filtrePatientPrenom = $formulaireFiltres.find('.valeurPatientPrenom').val();
		if(filtrePatientPrenom != null && filtrePatientPrenom !== '')
			filtres.push({ name: 'fq', value: 'patientPrenom:' + filtrePatientPrenom });

		var filtreFamilleNom = $formulaireFiltres.find('.valeurFamilleNom').val();
		if(filtreFamilleNom != null && filtreFamilleNom !== '')
			filtres.push({ name: 'fq', value: 'familleNom:' + filtreFamilleNom });

		var filtrePatientPrenomPrefere = $formulaireFiltres.find('.valeurPatientPrenomPrefere').val();
		if(filtrePatientPrenomPrefere != null && filtrePatientPrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientPrenomPrefere:' + filtrePatientPrenomPrefere });

		var filtrePatientDateNaissance = $formulaireFiltres.find('.valeurPatientDateNaissance').val();
		if(filtrePatientDateNaissance != null && filtrePatientDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissance:' + filtrePatientDateNaissance });

		var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
		if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

		var filtrePatientCle = $formulaireFiltres.find('.valeurPatientCle').val();
		if(filtrePatientCle != null && filtrePatientCle !== '')
			filtres.push({ name: 'fq', value: 'patientCle:' + filtrePatientCle });

		var filtrePatientTri = $formulaireFiltres.find('.valeurPatientTri').val();
		if(filtrePatientTri != null && filtrePatientTri !== '')
			filtres.push({ name: 'fq', value: 'patientTri:' + filtrePatientTri });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreCliniqueCles = $formulaireFiltres.find('.valeurCliniqueCles').val();
		if(filtreCliniqueCles != null && filtreCliniqueCles !== '')
			filtres.push({ name: 'fq', value: 'cliniqueCles:' + filtreCliniqueCles });

		var filtrePatientNomComplet = $formulaireFiltres.find('.valeurPatientNomComplet').val();
		if(filtrePatientNomComplet != null && filtrePatientNomComplet !== '')
			filtres.push({ name: 'fq', value: 'patientNomComplet:' + filtrePatientNomComplet });

		var filtrePatientNomCompletPrefere = $formulaireFiltres.find('.valeurPatientNomCompletPrefere').val();
		if(filtrePatientNomCompletPrefere != null && filtrePatientNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientNomCompletPrefere:' + filtrePatientNomCompletPrefere });

		var filtrePatientNomFormel = $formulaireFiltres.find('.valeurPatientNomFormel').val();
		if(filtrePatientNomFormel != null && filtrePatientNomFormel !== '')
			filtres.push({ name: 'fq', value: 'patientNomFormel:' + filtrePatientNomFormel });

		var filtrePatientDateNaissanceDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceDAnnee').val();
		if(filtrePatientDateNaissanceDAnnee != null && filtrePatientDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceDAnnee:' + filtrePatientDateNaissanceDAnnee });

		var filtrePatientDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceMoisDAnnee').val();
		if(filtrePatientDateNaissanceMoisDAnnee != null && filtrePatientDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceMoisDAnnee:' + filtrePatientDateNaissanceMoisDAnnee });

		var filtrePatientDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurPatientDateNaissanceJourDeSemaine').val();
		if(filtrePatientDateNaissanceJourDeSemaine != null && filtrePatientDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceJourDeSemaine:' + filtrePatientDateNaissanceJourDeSemaine });
	}
	return filtres;
}

function rechercheadminPatientMedicaleVals(filtres, success, error) {
	$.ajax({
		url: '/api/admin/patient?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggerePatientMedicaleInscriptionCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-notes-medical ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['patientCle'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_patientCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurInscriptionCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_patientCle_" + o['pk'] + "'); patchPatientMedicaleVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'enleverLueur($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribuer)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#PatientMedicaleForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionMedicaleVals(filtres, success, error);
}

async function websocketPatientMedicale(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketPatientMedicale', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-orange ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-hospital-user w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier patients');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-orange ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			$('.box-' + id).remove();
			if(numPATCH < numFound)
				$('.top-box').append($box);
			if(success)
					success(json);
		});

		window.eventBus.registerHandler('websocketInscriptionMedicale', function (error, message) {
			$('#Page_inscriptionCles').trigger('oninput');
			$('#Page_inscriptionCles_ajouter').text('ajouter une inscription');
			$('#Page_inscriptionCles_ajouter').removeClass('w3-disabled');
			$('#Page_inscriptionCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketInscriptionMedicale', function (error, message) {
			$('#Page_inscriptionCles').trigger('oninput');
			$('#Page_inscriptionCles_ajouter').text('ajouter une inscription');
			$('#Page_inscriptionCles_ajouter').removeClass('w3-disabled');
			$('#Page_inscriptionCles_ajouter').attr('disabled', false);
		});
	}
}
async function websocketPatientMedicaleInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherPatientMedicaleVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['patientPrenom'];
			if(vars.includes('patientPrenom')) {
				$('.inputPatientMedicale' + pk + 'PatientPrenom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'PatientPrenom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'PatientPrenom'));
			}
			var val = o['familleNom'];
			if(vars.includes('familleNom')) {
				$('.inputPatientMedicale' + pk + 'FamilleNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'FamilleNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'FamilleNom'));
			}
			var val = o['patientPrenomPrefere'];
			if(vars.includes('patientPrenomPrefere')) {
				$('.inputPatientMedicale' + pk + 'PatientPrenomPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'PatientPrenomPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'PatientPrenomPrefere'));
			}
			var val = o['patientDateNaissance'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('patientDateNaissance')) {
				$('.inputPatientMedicale' + pk + 'PatientDateNaissance').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'PatientDateNaissance').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'PatientDateNaissance'));
			}
			var val = o['inscriptionCles'];
			if(vars.includes('inscriptionCles')) {
				$('.inputPatientMedicale' + pk + 'InscriptionCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'InscriptionCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'InscriptionCles'));
			}
		});
	}
}
